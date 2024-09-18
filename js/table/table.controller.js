import * as model from './../model.js'
import { renderRequests } from './table.view.js'

function formShow() {
    let requests = model.getRequest();  // Получаем заявки из модели
    requests = model.changeProductName(requests)
    renderRequests(requests);  // Передаем заявки во View для отображения
    model.counterNewBadge()
}


formShow()
export { formShow };
