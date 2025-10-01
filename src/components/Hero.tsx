import {Button} from '@/components/ui/button';
import productImage from '@/assets/venille-wipes-product.png';
import {Leaf, Sparkles} from 'lucide-react';

const Hero = () => {
	return (
		<section
			id='top'
			className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-primary/5 scroll-mt-24'
		>
			{/* Decorative elements */}
			<div className='absolute top-20 left-10 opacity-10'>
				<Leaf className='w-32 h-32 text-primary' />
			</div>
			<div className='absolute bottom-20 right-10 opacity-10'>
				<Sparkles className='w-24 h-24 text-secondary' />
			</div>

			<div className='container mx-auto px-4 py-20'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left content */}
					<div className='space-y-8 animate-fade-in'>
						<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full'>
							<Leaf className='w-4 h-4 text-primary' />
							<span className='text-sm font-medium text-primary'>
								100% Eco-Friendly
							</span>
						</div>

						<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
							Venille Sustainable{' '}
							<span className='text-gradient-eco'>
								Makeup Wipes
							</span>
						</h1>

						<p className='text-xl md:text-2xl text-muted-foreground max-w-xl'>
							Beauty that's kind to your skin and the planet
						</p>

						<div className='flex flex-col sm:flex-row gap-4'>
							<Button variant='hero' size='xl'>
								Shop Now
							</Button>
							<Button variant='outline' size='xl'>
								Learn More
							</Button>
						</div>

						<div className='grid grid-cols-3 gap-6 pt-8'>
							<div>
								<div className='text-3xl font-bold text-primary'>
									100%
								</div>
								<div className='text-sm text-muted-foreground'>
									Biodegradable
								</div>
							</div>
							<div>
								<div className='text-3xl font-bold text-secondary'>
									6 months
								</div>
								<div className='text-sm text-muted-foreground'>
									Decompose
								</div>
							</div>
							<div>
								<div className='text-3xl font-bold text-primary'>
									30%
								</div>
								<div className='text-sm text-muted-foreground'>
									More Affordable
								</div>
							</div>
						</div>
					</div>

					{/* Right content - Product image */}
					<div className='relative animate-slide-in-right'>
						<div className='relative z-10'>
							<img
								src={productImage}
								alt='Venille Eco-Friendly Makeup Wipes'
								className='w-full max-w-lg mx-auto drop-shadow-2xl hover-lift'
							/>
						</div>
						{/* Decorative circle */}
						<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 scale-75'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
