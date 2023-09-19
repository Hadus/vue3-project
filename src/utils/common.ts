/**
 *
 * @param {String} key
 * @param {String} value
 * @description 设置 loacalStorage
 */
export function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}
/**
 *
 * @param {String} key
 * @description 获取 loacalStorage
 */
export function getLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return '';
  }
}
/**
 *
 * @param {*} key
 * @description 删除 loacalStorage
 */
export function deleteLocalStorage(key) {
  localStorage.removeItem(key);
}
/**
 *
 * @param {String} key
 * @param {String} value
 * @description 设置 sessionStorage
 */
export function setSessionStorage(key, value) {
  try {
    sessionStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}
/**
 *
 * @param {String} key
 * @description 获取 sessionStorage
 */
export function getSessionStorage(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (error) {
    return '';
  }
}
/**
 *
 * @param {*} key
 * @description 删除 sessionStorage
 */
export function deleteSessionStorage(key) {
  sessionStorage.removeItem(key);
}

// ------------- token操作 START -------------
export function setToken(token) {
  setSessionStorage('token', token);
}
export function getToken() {
  return getSessionStorage('token');
}
export function deleteToken() {
  deleteSessionStorage('token');
  deleteSessionStorage('vuex');
}
// ------------- token操作 END -------------

/**
 *
 * @param {String} target
 * @description 深拷贝
 */
export function deepClone(target) {
  let result;
  // 如果不是基本类型
  if (typeof target === 'object') {
    // 是不是数组
    if (Array.isArray(target)) {
      result = [];
      for (let i = 0; i < target.length; i++) {
        result.push(deepClone(target[i])); // 递归
      }
      // 是不是 null
    } else if (target === null) {
      result = null;
      // 是不是正则
    } else if (target.constructor === RegExp) {
      result = target;
      // 都不是就是对象了
    } else {
      result = {};
      for (let k in target) {
        result[k] = deepClone(target[k]);
      }
    }
    // 如果是基本类型
  } else {
    result = target;
  }
  return result;
}
