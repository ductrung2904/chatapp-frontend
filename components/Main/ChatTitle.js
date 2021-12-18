import React, { useEffect, useState } from 'react'
import { getCurrentUser, getUser } from '../../actions/user'

function ChatTitle({ conversationId }) {
    const [convInfo, setConvInfo] = useState([])

    const loadConvInfo = () => {
        getCurrentUser(conversationId).then(data => {
            console.log(data)
            if (data.error) {
                console.log(data.error);
            }
            else {
                setConvInfo(data);
            }
        })
    }

    useEffect(() => {
        loadConvInfo();
    }, [])

    const showConvInfo = () => {
        return (
            <>
                {convInfo && (
                    <>
                        <div className="chat__title">
                            <img src="https://s120-ava-grp-talk.zadn.vn/d/f/e/c/2/120/fc0d636c2bc2e9a2602246ec2771a827.jpg" alt="" />
                            <span>{convInfo.firstName + " " + convInfo.lastName}</span>
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
                )}
            </>
        )
    }

    return (
        <React.Fragment>
            {showConvInfo()}
        </React.Fragment>
    )
}

export default ChatTitle
