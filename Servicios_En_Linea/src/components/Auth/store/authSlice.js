import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  perfilSelected: false,
  checking: true,
  status: 'not-authenticated',
  perfil: '',
  rutas: [],
  rulesByMenu: [],
  userId:null,
  userName:'',
  accountNumber:'',
  menuRouteId:null,
  profilesApp:[]
}

export const AuthSlice = createSlice({
  name: 'auth',
  // ---- initialState: estado inicial----
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.checking = false;
      state.userName = payload.userName;
      state.userId = payload.userId;
      state.status = 'authenticated';      
    },
    loginCheckingFinish: (state) => {
      state.checking = false
    },

    logout: (state) => {
      state.checking = false;
      state.perfilSelected = false;
      state.perfil = '';
      state.status = 'not-authenticated';
      state.accountNumber = '';
      state.rutas = [];
      state.userName = null;
      state.userId = null;
    },
    loginCambioPerfil: (state) => {
      state.perfilSelected = false
    },    
    loginSelecionPerfil: (state, { payload }) => {
      state.perfil = payload;
      state.perfilSelected = true
    },
    loginPerfilLoadRutas: (state, { payload }) => {
      state.rutas = [...payload]
    },
    loginRulesByMenu: (state, { payload }) => {
      state.rulesByMenu = [...payload]
    },
    cleanRulesMenu: (state) => {
      state.rulesByMenu = [];
    },
    AssingMenuRouter: (state, { payload }) => {
      state.menuRouteId = payload;
    },
    cleanMenuRouter: (state) => {
      state.menuRouteId = null;
    },
    setProfilesInfo: (state, {payload}) => {
      state.profilesApp = payload;
    },
  },
})
export const { login, loginCheckingFinish, logout, loginCambioPerfil, loginSelecionPerfil, loginPerfilLoadRutas, AssingMenuRouter, cleanMenuRouter,
  loginRulesByMenu, cleanRulesMenu, setProfilesInfo} = AuthSlice.actions
