export default function AdminPage() {

    return (
        <div>
            <ul className="text-xl p-5" style={{listStyleType: "number"}}>
                <li>
                    Notes
                    <ul className="ms-10 my-3" style={{listStyleType: "number"}}>
                        <li className="line-through decoration-1 decoration-red-400">React sekeleton loader
                            eklenecek
                        </li>
                        <li className="line-through decoration-1 decoration-red-400">React lazy loader eklenecek
                            (Players ve Games sayfaları için sayfa başına fazla veri
                            yüklendiği zaman olası gecikmeleri önleyecek.)
                        </li>
                        <li>Kayıt ol ve Giriş yap sayfası eklenecek, kayıt olunan veriler local storage 'de
                            saklanacak.
                        </li>
                        <li>Giriş yapan kullanıcı belirli bir süre sonra otomatik çıkış yapacak.</li>
                        <li>Kayıt ol ve giriş yap için reCaptcha eklenecek.</li>
                        <li>(Authentication - PrivateUser) Takım istatistiklerini sadece giriş yapmış kullanıcılar
                            görebilecek.
                        </li>
                        <li>(Authentication - PrivateAdmin) Sadece adminin erişebileceği bir sayfa tasarlanacak.</li>
                        <li>Responsive tasarım fixlemeleri yapılacak.</li>
                    </ul>
                </li>
                <li>
                    Player Page
                    <ul className="ms-10 my-3" style={{listStyleType: "number"}}>
                        <li>En üste bir search bar olacak ve oyuncular isimlerine göre aranabilecek</li>
                        <li className="line-through decoration-1 decoration-red-400">Filtreleme Games Page ile aynı
                            olacak.
                        </li>
                    </ul>
                </li>
                <li>
                    Home Page
                    <ul className="ms-10 my-3" style={{listStyleType: "number"}}>
                        <li>HTML5 video etiketi ile basketbol videosu eklenecek. (background)</li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}