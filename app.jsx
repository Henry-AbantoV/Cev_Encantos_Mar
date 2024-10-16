<div className='container__app'>

        <header>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <CookieBanner /> {/* Render the CookieBanner component */}
        
        </header>

        <main onClick={() => setIsOpen(false)}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre-nosotros' element={<Sobre_nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/aniversario' element={<Aniversario />} />
            {
             user?.email === 'natalymedinasilva@gmail.com'
             ||  user?.email === 'eabantov20_1@unc.edu.pe'
             ||  user?.email === 'henryave30@gmail.com'
             ?
              <Route path='/add-product' element={<AddProduct />} />
              :
              <Route path='/*' element={<Error404 />} />
            }

            <Route path='/*' element={<Error404 />} />
          </Routes>
      
        </main>

        <footer>
          <Footer />
        </footer>

      </div>