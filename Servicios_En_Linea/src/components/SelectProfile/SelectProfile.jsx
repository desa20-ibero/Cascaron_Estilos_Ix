import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Logo from '../../img/logo_ibero.png'
import { starProfileInformation } from '../Auth';

export const SelectProfile = () => {

    const dispatch =  useDispatch();

  const dataPerfiles = JSON.parse(localStorage.getItem('RespuestaPerfiles'))

  
  //Listado de perfiles que puede tener un usuario
  const inputOptions = useMemo(() => [], [])

  dataPerfiles.map(
    (dp) => (inputOptions[dp.profileId] = dp.profile)
    );

      //Prepara el perfil seleccionado
      const iniciarPerfil = useCallback( (_profileId) => {
        const perfil = dataPerfiles.find(
            (p) => p.profileId == _profileId
        );

        AlertPerfil(perfil.profile);
        dispatch(starProfileInformation(perfil));
    }, [dataPerfiles,dispatch]);

     // Alerta que desaparece despues de unos segundos, 
    //la cual muestra el perfil seleccionado
    const AlertPerfil = (PerfilName) => {
        const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        // timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
        });
    
        Toast.fire({
        icon: "success",
        title: `Perfil: ${PerfilName}`,
        });
    };

     //Los usuario que tienen solo un perfil, no deben entara en menu de seleccion de perfil
    //Ya que se debe cargar en automatico su perfil
    const seleccionPerfilUnico = useCallback(()  => {
        const perfil = dataPerfiles[0];        

        AlertPerfil(perfil.profile);
        dispatch(starProfileInformation(perfil));
    }, [dataPerfiles,dispatch]);

    // Usuario con multiples perfiles deben selecionar el perfil
    const SelPerfilMultiple =  useCallback(async()    => {
        const { value: id_rel_perfil_Est } = await Swal.fire({
        title: "Perfiles Disponibles",
        input: "select",
        inputOptions: inputOptions,
        showCancelButton: false,
        allowOutsideClick: false,
        });

        if (id_rel_perfil_Est) {
        iniciarPerfil(id_rel_perfil_Est);
        }
    }, [iniciarPerfil,inputOptions])

    // El componnte puede ser montado varias veces.
    // Con el efecto evitamos que se vuelva a pedir el perfil
    //El if interno ayuda al control para cuado se recarga la pagina y se pierde el estado del
    //El logaout o el clck en cambiar perfil borran el item rel_perfil_Est para que al volver aqui
    // Vuelva  pedir el perfil
    useEffect(() => {
        //Si no existe perfil significa que apenas se va a seleccionar
        if (localStorage.getItem("rel_perfil_Est") == null) {
        if (dataPerfiles.length === 1) {
            seleccionPerfilUnico();
        } else {
            SelPerfilMultiple();
        }
        } else { //Si no, quiere decir que el perfil ya se habia elejido
        const id_rel_perfil_Est = localStorage.getItem("rel_perfil_Est");
        iniciarPerfil(id_rel_perfil_Est);
        }
    }, [dataPerfiles.length,SelPerfilMultiple,iniciarPerfil,seleccionPerfilUnico]);


  return (
    <main>
    <div className="container d-flex align-items-center justify-content-center mt-5 animate__animated animate__fadeIn">
      <img style={{ width: '50%', height: '90%' }} src={Logo} />
    </div>
    <div className="-mrgnTop-1r mt-5 d-flex justify-content-center animate__animated animate__fadeIn">
      <h3 className="fs-2">Sistema de números de cuenta</h3>
    </div>
  </main>
  )
}
