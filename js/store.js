
let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    socketConnection: false
}

export const setSocketId = (socketId) => {
    state = {
        ...state,
        socketId
    }
}

export const setLocalStream = (stream) => {
    state = {
        ...state,
        localStream: stream
    }
}

export const setSocketConnection = (value) => {
    state = {
        ...state,
        socketConnection: value
    }
}

export const setRemoteStream = (stream) => {
    state = {
        ...state,
        remoteStream: stream
    }
}

export const getState = () => {
    return state;
}