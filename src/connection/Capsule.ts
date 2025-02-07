import Capsule, { Environment } from '@usecapsule/react-sdk'

if (!process.env.REACT_APP_CAPSULE_API_KEY) {
  throw new Error('REACT_APP_CAPSULE_API_KEY is required')
}

// Initialize Capsule client
const capsuleClient = new Capsule(Environment.BETA, process.env.REACT_APP_CAPSULE_API_KEY)

console.log('Capsule client initialized')
export default capsuleClient
