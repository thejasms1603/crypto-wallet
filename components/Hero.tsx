const Hero = () => {
  return (
    <main className='container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16'>
      <section className='relative mt-8'>
        <div className='absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-cyan-300/10 rounded-full blur-3xl -z-10'></div>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <div className='inline-flex items-center px-3 py-1 rounded-full bg-blue-50 mb-4 animate-fade-in '>
            <span className='text-sm font-medium text-blue-600'>
              Seamless Crypto Experience
            </span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:text-white'>
              Your Gateway to Digital Assets
            </span>
          </h1>
          <p className='dark:text-white text-xl text-gray-600 mb-8 animate-fade-in [animation-delay:400ms]'>
            Manage, trade, and grow your crypto portfolio with our secure and
            intuitive wallet
          </p>
        </div>
        <div className='max-w-md mx-auto mb-12 animate-fade-in [animation-delay:500ms]'></div>
      </section>
    </main>
  );
}

export default Hero