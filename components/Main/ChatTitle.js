import React from 'react'

function ChatTitle() {
    return (
        <>
            <div className="chat__title">
                <img src="https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/237058448_2891263887792724_558775700647028364_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=BaIn8vGmlpsAX80N9f8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=992e2399251b7531b909f24aa1933e51&oe=61A9F366" alt="" />
                <span>18DTH2A_N8_QTDA</span>
                <p>5 thành viên</p>
                <i className="fa fa-user-plus" data-bs-toggle="modal" data-bs-target="#modalAddMember"></i>
            </div>

            <div className="create__modal modal fade" id="modalAddMember" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h2 className="modal-title w-100 font-weight-bold">Mời thêm thành viên</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <input type="text" className="create__input form-control validate" />
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-primary create__btn"><span>Thêm</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatTitle
