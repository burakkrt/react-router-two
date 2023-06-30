export default function Main() {


    return (
        <div>
            <ul className="text-xl p-5" style={{listStyleType: "number"}}>
                <li>
                    Notes
                    <ul className="ms-10 my-3" style={{listStyleType: "number"}}>
                        <li>Lazy loader için react loader sekeleton yüklenecek</li>
                    </ul>
                </li>
                <li>
                    Player Page
                    <ul className="ms-10 my-3" style={{listStyleType: "number"}}>
                        <li>En üste bir search bar olacak ve oyuncular isimlerine göre aranabilecek</li>
                        <li>Açılışta ortalama 25 oyuncu listelencek</li>
                        <li>prev next butonları ile diğer oyuncular görülebilecek</li>
                    </ul>
                </li>
                <li>
                    Home Page
                    <ul className="ms-10 my-3" style={{listStyleType: "number"}}>
                        <li>Güzel bir görsel tasarım (resimler) eklenecek.</li>
                        <li>Vip sayfa yapıalcak ve istatistikler daha ayrıntılı gösteriecek, sadece kayıtlı kullanıcılar
                            görebilir.
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}