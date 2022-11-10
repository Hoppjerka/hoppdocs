import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '20px',
              }}>

        <iframe src='/reporter/index.html' height="100%" width='100%' />
        {/* 

        If you want, you can also link to this externally like this. But whatever..
         
        https://github.com/facebook/docusaurus/issues/3894#issuecomment-910276778 
        
        pathname:///dogfooding/javadoc
        pathname:///dogfooding/javadoc/index.html
        pathname://../dogfooding/javadoc
        pathname://../dogfooding/javadoc/index.html
        
        
        */}
        {/* <Link to="pathname://../reporter/index.html">html report</Link>  */}
      </div>
    </Layout>
  );
}