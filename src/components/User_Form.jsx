import { useState } from "react";

function User_Form() {
    
    const [number, setNumber] = useState("");

    const HandleContactChange = (e) => {
        let input = e.target.value;
        // Remove tudo que não é número
        let onlynumbers = input.replace(/\D/g, "");

        // Se estiver apagando, não aplica a máscara
        if (onlynumbers.length < 10){
            setNumber(input);
            return;
        }

        if (onlynumbers.length <= 10) {
            onlynumbers = onlynumbers.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
            onlynumbers = onlynumbers.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }
        setNumber(onlynumbers);
    }


    return (
        <form>
            <div id="user-form" className="container-fluid d-flex border border-2 border-black rounded ">
                <div className="row g-3 d-flex justify-content-start ">
                    <h3 className="mt-4 ms-4"><strong>Entre em Contato:</strong></h3>
                    <div className="col-md-4 m-4">
                        <label htmlFor="fname" className="form-label fs-4"><strong>Nome:</strong></label>
                        <input id="fname" type="text" className="form-control  border border-3 rounded border-black" autoComplete="given-name" placeholder="Ex: João" />
                    </div>
                    <div className="col-md-4 m-4">
                        <label htmlFor="lname" className="form-label fs-4"><strong>Sobrenome:</strong></label>
                        <input id="lname" type="text" className="form-control border border-3 rounded border-black" autoComplete="family-name" placeholder="Ex: Abreu" />
                    </div>
                    <div className="col-md-5 m-4 mt-1">
                        <label htmlFor="contact" className="form-label fs-4"><strong>Contato:</strong></label>
                        <input id="contact" type="text"  maxLength={15}value={number} onChange={HandleContactChange} className="form-control border border-3 rounded border-black" autoComplete="tel" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="col-md-9 4 m-4 mt-1">
                        <label htmlFor="email" className="form-label fs-4"><strong>Endereço de Email:</strong></label>
                        <input id="email" type="email" className="form-control border border-3 rounded border-black" autoComplete="email" placeholder="nome@exemplo.com" />
                    </div>
                </div>
            </div>
        </form>
    );
}
export default User_Form;