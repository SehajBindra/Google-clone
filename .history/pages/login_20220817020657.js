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

      <div className=" flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center bg-gray-100">
        <img
          className="w-80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt=""
        />

        <p className="font-xs ">Welcome to the Google clone .</p>

        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
              <div className="flex flex-col items-center" key={provider.name}>
                <button
                  className=" p-3 px-5 py-5 text-lg mr-10 ring-gray-300 ring-1  rounded-full "
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  <p> Sign In with {provider.name}</p>
                  <img
                    className="h-5 w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
                    alt=""
                  />
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
