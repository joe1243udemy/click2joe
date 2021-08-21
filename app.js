import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';
class MyApp extends App{
    render() {
        const { Component, props} = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>click2go</title>
                    <meta charSet="utf-8"/>
                </Head>
                <AppProvider i18n={translations}>
                    <Component {...pageProps}/>
                </AppProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;