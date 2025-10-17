import {Link, redirect} from "react-router";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";
import {loginWithGoogle} from "~/appwrite/auth";
import {account} from "~/appwrite/client";

export async function clientLoader() {
    try {
        const user = await account.get();

        if(user.$id) return redirect('/');
    } catch (e) {
        console.log('Error fetching user', e)
    }
}

const SignIn = () => {
    return (
        <main className="auth">
            <section className="flex-center glassmorphism size-full px-6">
                <div className="sign-in-card">
                    <header className="header">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/assets/icons/logo.svg"
                                alt="Tourvisto logo"
                                className="size-[30px]"
                            />
                            <h1 className="p-28-bold text-dark-100">Tourvisto</h1>
                        </Link>
                    </header>

                    <article className="my-8 text-center">
                        <h2 className="p-28-semibold text-dark-100">
                            Start Your Travel Journey
                        </h2>
                        <p className="p-18-regular text-gray-100 !leading-7 mt-2">
                            Sign in to manage destinations, itineraries, and user activity with ease.
                        </p>
                    </article>

                    <ButtonComponent
                        type="button"
                        className="button-class flex-center gap-2 !h-11 !w-full"
                        onClick={loginWithGoogle}
                    >
                        <img
                            src="/assets/icons/google.svg"
                            alt="Google icon"
                            className="size-5"
                        />
                        <span className="p-18-semibold text-white">
                            Sign in with Google
                        </span>
                    </ButtonComponent>
                </div>
            </section>
        </main>
    )
}
export default SignIn

