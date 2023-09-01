"use client"
import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function Home() {
    const { data } = useSession()    
    console.log(data)

    return (
        <section className="column">
            <Head>
                <title>Home</title>
            </Head>
            {
                data?(
                    <section className="hero is-primary">
                        <div className="hero-body">
                            <p className="title">
                                Welcome, {data.user.fullname}
                            </p>
                            <p className="subtitle">
                                Please fell in your house!
                            </p>
                        </div>
                    </section>    
                ):(
                    <section className="hero is-danger">
                        <div className="hero-body">
                            <p className="title">
                                Please identify yourself!
                            </p>
                            <p className="subtitle">
                                <Link href="/signup"><button className="button is-warning">Register</button></Link>
                                <Link href="/login"><button className="button is-info">Login</button></Link>
                            </p>
                        </div>
                    </section>    
                )
            }
        </section>
  )
}


