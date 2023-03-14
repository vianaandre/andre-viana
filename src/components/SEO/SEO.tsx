import Head from 'next/head';
import React from 'react';
import { SEOProps } from './types';

export const SEO: React.FC<SEOProps> = ({
  description, image, title, url,
}) => {
  return (
    <Head>
      <title>
        {title}
      </title>
      <meta name="description" content={description} />
      <meta name="application-name" content="Uzer Ticket" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#05B59D" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#05B59D" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=utf-8"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="978" />
      <meta property="og:image:height" content="567" />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content="Imagem para compartilhamento" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="fb:app_id" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="apple-touch-icon" sizes="152x152" href={image} />
      <link rel="apple-touch-icon" sizes="180x180" href={image} />
      <link rel="apple-touch-icon" sizes="167x167" href={image} />
      <link rel="icon" type="image/png" sizes="32x32" href={image} />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#05B59D" />
      <link
        rel="shortcut icon"
        href="favicon.png"
        type="image/x-icon"
      />
    </Head>
  );
};
