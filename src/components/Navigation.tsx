import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {Leaf} from 'lucide-react';
import Logo from '@/assets/logo.png';

const Navigation = () => {
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50'>
			<div className='container mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-2'>
						<div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center'>
							{/* <Leaf className='w-4 h-4 text-primary-foreground' /> */}
							<img src={Logo} className='border border-gray-300 rounded-sm'/>
						</div>
						<span className='text-xl font-bold'>Venille</span>
					</div>

					<div className='hidden md:flex items-center space-x-8'>
						<a
							href='#products'
							className='transition-colors hover:text-primary'
						>
							Products
						</a>
						<a
							href='#mission'
							className='transition-colors hover:text-primary'
						>
							Our Mission
						</a>
						<a
							href='#sustainability'
							className='transition-colors hover:text-primary'
						>
							Sustainability
						</a>
						<a
							href='#contact'
							className='transition-colors hover:text-primary'
						>
							Contact
						</a>
					</div>

					<div className='flex items-center space-x-4'>
						<Button variant='default' size='sm'>
							Shop Now
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
