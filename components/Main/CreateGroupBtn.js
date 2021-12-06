import React from 'react'

function CreateGroupBtn() {
    return (
        <>
            <div className="new__message__container">
                <button className="add__group__btn" data-bs-toggle="modal" data-bs-target="#modalAddConv">+</button>
            </div>

            <div className="create__modal modal fade" id="modalAddConv" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h2 className="modal-title w-100 font-weight-bold">Nhập tên nhóm</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <input type="text" className="create__input form-control validate" />
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-primary create__btn"><span>Tạo</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateGroupBtn
