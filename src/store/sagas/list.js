import { call, put} from 'redux-saga/effects'

import { services } from '../services'
import { Creators as ListActions } from '../actions/list'

const genericImg = "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/03/r16x9/20190315121922_1200_675_-_compras_online_e_commerce.jpg"

export default function* getImageRequest(action) {
    try {
        const img = yield call(services.getImages, action.product.product)
        yield put(ListActions.getImageSuccess(action.product, img))
    } catch (error) {
        console.log(error)        
        yield put(ListActions.getImageFailure(action.product, genericImg))
    }
}