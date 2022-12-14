import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";

function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Login - Google</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
        />
      </Head>

      <div className=" flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center ">
        <img
          className="w-80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt=""
        />

        <p className="font-xs mt-8">
          Welcome to the Google Feel free to Search and Explore!{" "}
        </p>

        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
              <div className="flex flex-col items-center" key={provider.name}>
                <button
                  className=" flex items-center p-3 px-8 py-3 text-lg  ring-gray-300 ring-1  rounded-full "
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  <img
                    className="h-5 w-5 mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
                    alt=""
                  />
                  Sign In with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
