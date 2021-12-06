import React from 'react'

function ConversationList() {
    return (
        <div className="conversation__list">
            {/* <div className={styles["conversation"] + " " + styles["active"]}> */}
            <div className="conversation active">
                <img src="https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/237058448_2891263887792724_558775700647028364_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=BaIn8vGmlpsAX80N9f8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=992e2399251b7531b909f24aa1933e51&oe=61A9F366" alt="" />
                <div className="title__text">18DTH2A_N8_QTDA</div>
                <div className="created__date">Apr 16</div>
                <div className="conversation__message">
                    văn mẫu
                </div>
            </div>
            <div className="conversation">
                <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-1/p200x200/49343525_1961898087451804_7800479543835230208_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Acl_DyzuJccAX_vbm58&_nc_ht=scontent.fsgn5-10.fna&oh=1f795c5d6de274926a4b38158206330f&oe=61AD68DF" alt="" />
                <div className="title__text">Nhóm 1</div>
                <div className="created__date">2 days ago</div>
                <div className="conversation__message">
                    Alo 1 2 3 4
                </div>
            </div>
            <div className="conversation">
                <img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-1/c0.50.200.200a/p200x200/74165654_2403520756576492_4074453775123742720_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=PNJ15Amcc0AAX-A1mzJ&_nc_ht=scontent.fsgn5-4.fna&oh=26dc007f68fa2bf0e8fee964105ba75f&oe=61AD05B1" alt="" />
                <div className="title__text">Nhóm 2</div>
                <div className="created__date">1 week ago</div>
                <div className="conversation__message">
                    Ờ
                </div>
            </div>
            <div className="conversation">
                <img src="https://s120-ava-talk.zadn.vn/0/f/1/c/8/120/a8261386b7e2ab68b03882809a23c452.jpg" alt="" />
                <div className="title__text">Nhóm 3</div>
                <div className="created__date">2 days ago</div>
                <div className="conversation__message">
                    Test 123
                </div>
            </div>
            <div className="conversation">
                <img src="https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/237058448_2891263887792724_558775700647028364_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=BaIn8vGmlpsAX80N9f8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=992e2399251b7531b909f24aa1933e51&oe=61A9F366" alt="" />
                <div className="title__text">Nhóm 4</div>
                <div className="created__date">6:14 PM</div>
                <div className="conversation__message">
                    okok good
                </div>
            </div>
            <div className="conversation">
                <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-1/p200x200/49343525_1961898087451804_7800479543835230208_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Acl_DyzuJccAX_vbm58&_nc_ht=scontent.fsgn5-10.fna&oh=1f795c5d6de274926a4b38158206330f&oe=61AD68DF" alt="" />
                <div className="title__text">Nhóm 5</div>
                <div className="created__date">2 days ago</div>
                <div className="conversation__message">
                    Test 456
                </div>
            </div>
        </div>
    )
}

export default ConversationList
