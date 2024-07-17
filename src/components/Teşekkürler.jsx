import  "../style/teşekkürler.css"
const Teşekkürler = ( { bilgiler }) => {
    return (
        <div className="teşekkürler-content">
            <h1>TEŞEKKÜRLER</h1>
            <h1>SİPARİŞİNİZ ALINDI!</h1>
            <p>İsim: {bilgiler.isim}</p>
            <p>Pizza Boyut: {bilgiler.boyut}</p>
            <p>isim: {bilgiler.hamurTipi}</p>
            <p>isim: {bilgiler.toppings.join(" - ")}</p>
            <p>isim: {bilgiler.extraNotes}</p>
            <p>isim: {bilgiler.adet}</p>
            <p>isim: {bilgiler.total}</p>
        </div>
    )
}

export default Teşekkürler