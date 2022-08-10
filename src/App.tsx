import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
	return (
		<div className='container mx-auto'>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
