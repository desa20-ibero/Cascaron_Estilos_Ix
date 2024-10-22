export const profilesAppDesarrollo = {
    "mensaje": "Consulta Correcta.",
    "data": [
        {           
            "id": 1,
            "profile": "Administrador SA",
            "description": "Perfil administrador SA con todos los privilegios y acceso a todas las aplicaciones",
            "status": 1,
            "idApp":1
        },  
        {           
            "id": 2,
            "profile": "AdminApp",
            "description": "Administrador de solo las aplicaciones en las que tenga el perfil AdminApp",
            "status": 1,
            "idApp":1

        },            
    ],
    "exito": 1,
    "respuestaStatus":"[Axios] OK",
    "refresh":false
}

export const profilesAppInvestigadores = {
    "mensaje": "Consulta Correcta.",
    "data": [
        {           
            "id": 1,
            "profile": "AdminApp",
            "description": "Perfil administrador SA con todos los privilegios y acceso a todas las aplicaciones",
            "status": 1,
            "idApp":2
        },  
        {           
            "id": 2,
            "profile": "Consultor",
            "description": "Perfil de consulta en la aplicacion de investigadores",
            "status": 1,
            "idApp":2

        },     
        {           
            "id": 3,
            "profile": "Registrador",
            "description": "Perfil de registro en la aplicacion de investigadores",
            "status": 1,
            "idApp":2

        },            
    ],
    "exito": 1,
    "respuestaStatus":"[Axios] OK",
    "refresh":false
}

export const profilesAppTitulacion = {
    "mensaje": "Consulta Correcta.",
    "data": [
        {           
            "id": 1,
            "profile": "AdminApp",
            "description": "Perfil administrador SA con todos los privilegios y acceso a todas las aplicaciones",
            "status": 1,
            "idApp":3
        },  
        {           
            "id": 2,
            "profile": "Administrador de certificados",
            "description": "Perfil de administrador de certificados en la app de titulación",
            "status": 1,
            "idApp":3

        },     
        {           
            "id": 3,
            "profile": "Administrador de titulos",
            "description": "Perfil de administrador de titulos en la app de titulación",
            "status": 1,
            "idApp":3

        },            
    ],
    "exito": 1,
    "respuestaStatus":"[Axios] OK",
    "refresh":false
}


export const fakeProfileById = {
    "mensaje": "Consulta Correcta.",
    "data":{ 
                  
            "id": 1,
            "profile": "AdminApp",
            "description": "Perfil administrador SA con todos los privilegios y acceso a todas las aplicaciones",
            "status": 1,
            "idApp":3
    },
    "exito": 1,
    "respuestaStatus":"[Axios] OK",
    "refresh":false
}