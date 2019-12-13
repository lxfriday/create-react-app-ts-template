import { DvaInstance } from 'dva'
import app from './app'

export default (dva: DvaInstance) => {
  dva.model(app)
}
