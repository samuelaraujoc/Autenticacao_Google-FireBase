import './styles.scss';
import { GoogleLogo } from 'phosphor-react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../Services/firebase'
import { useState } from 'react';

export function Signnin() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSingIn() {
        const provider = new GoogleAuthProvider

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="Foto do Usuário" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>
            <h1>Acesse sua Conta</h1>

            <span>
                Utilizando autenticação social, por exemplo, Autenticação com a sua conta Google.
            </span>
            <button type="button" className="button" onClick={handleGoogleSingIn}>
                <GoogleLogo />
                Entrar com Google
            </button>
        </div>
    )
}