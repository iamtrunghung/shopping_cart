import './footer.css'
function Footer(){
    return(
        <footer>
            <div className="footer_layout">
                    <div className="footer_first">
                        <h5>Tìm hiểu</h5>
                        <p><a href='#'>Lịch sử McDonald's</a></p>
                        <p><a href='#'>Giới thiệu McDonald's Việt Nam</a></p>
                        <p><a href='#'>Xuất xứ</a></p>
                        <p><a href='#'>Nhà cung cấp</a></p>
                        <p><a href='#'>Dịch vụ</a></p>
                        <p><a href='#'>An toàn thực phẩm</a></p>
                    </div>
                    <div className="footer_second">
                        <h5>Cơ hội nghệ nghiệp</h5>
                        <p><a href='#'>Thông tin tuyển dụng</a></p>
                        <p><a href='#'>Khu vực TP.HCM</a></p>
                        <p><a href='#'>Khu vực Hà Nội</a></p>
                    </div>
                    <div className="footer_third">
                        <h5>Chính sách</h5>
                        <p><a href='#'>Câu hỏi thường gặp</a></p>
                        <p><a href='#'>Điều khoản và điều kiện</a></p>
                        <p><a href='#'>Chính sách và quyền riêng tư</a></p>
                    </div>
                    <div className="footer_fourth">
                        <h5>Liên hệ với chúng tôi</h5>
                        <p><a href='#'>Liên hệ</a></p>
                        <p><a href='#'>Phản hồi chất lượng dịch vụ</a></p>
                    </div>
            </div>
            <p className='copyright'>&#169;2020-2022 McDonal's. All Rights Reserved</p>
        </footer>
    )
}
export default Footer