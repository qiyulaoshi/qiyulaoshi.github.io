import storage from 'store'
import {
  login,
  getInfo,
  logout
} from '@/api/login'
import {
  ACCESS_TOKEN
} from '@/store/mutation-types'
import roleObj from './info'
import {
  welcome,
  getCookie
} from '@/utils/util'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, {
      name,
      welcome
    }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = '/avatar2.jpg'
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        const result = new Date().getTime()
        storage.set(ACCESS_TOKEN, result, 7 * 24 * 60 * 60 * 1000)
        commit('SET_TOKEN', result)
        // document.cookie = 
        console.log(userInfo)
        resolve()
      })
    },

    // 获取用户信息
    GetInfo({
      commit
    }) {
      return new Promise((resolve, reject) => {
        console.log(roleObj)
        let result = {}
        result.role = roleObj
        console.log(result.role.permissions.length)
        if (result.role && result.role.permissions.length > 0) {
          const role = result.role
          role.permissions = result.role.permissions
          role.permissions.map(per => {
            if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
              const action = per.actionEntitySet.map(action => {
                return action.action
              })
              per.actionList = action
            }
          })
          console.log(getCookie('wc'))
          if(getCookie('wc') == '67f87c9b32834504b4ddf432055d88bd'){
            role.permissionList = ['administrators']
          }else if(getCookie('wc') == 'c53001d04a23cf3376f85d56ef4d4b6f'){
            role.permissionList = ['user']            
          }
          commit('SET_ROLES', result.role)
          commit('SET_INFO', result)
        } else {
          reject(new Error('123123'))
        }

        commit('SET_NAME', {
          name: result.name,
          welcome: welcome()
        })
        commit('SET_AVATAR', result.avatar)
        console.log(result)
        resolve(result)
      })
    },

    // 登出
    Logout({
      commit,
      state
    }) {
      return new Promise((resolve) => {
        // logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          storage.remove(ACCESS_TOKEN)
          resolve()
        // }).catch(() => {
        //   resolve()
        // }).finally(() => {})
      })
    }

  }
}

export default user