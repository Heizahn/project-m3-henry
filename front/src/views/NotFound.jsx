import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<>
			<main className='bg-transparent grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-[calc(100vh-64px)]'>
				<div className='text-center'>
					<p className='text-8xl font-semibold text-gray-300'>404</p>
					<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl'>Page not found</h1>
					<p className='mt-6 text-base leading-7 text-gray-400'>Sorry, we couldn’t find the page you’re looking for.</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<Link
							to='/home'
							className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Go back home
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
