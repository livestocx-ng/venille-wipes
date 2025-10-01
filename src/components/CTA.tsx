import {Button} from '@/components/ui/button';
import {Heart, Leaf} from 'lucide-react';

const CTA = () => {
	return (
		<section
			id='contact'
			className='py-20 px-4 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden scroll-mt-24'
		>
			{/* Decorative elements */}
			<div className='absolute top-0 left-0 w-full h-full opacity-10'>
				<Leaf className='absolute top-10 left-10 w-32 h-32 animate-pulse' />
				<Heart
					className='absolute bottom-10 right-10 w-24 h-24 animate-pulse'
					style={{animationDelay: '0.5s'}}
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				<div className='max-w-3xl mx-auto text-center space-y-8 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
						Join Us on Our Journey
					</h2>

					<p className='text-xl md:text-2xl text-white/90'>
						Experience the change with Venille Wipes. Together, we
						can create a more sustainable future—one makeup wipe at
						a time.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
						<Button
							variant='outline'
							size='xl'
							className='bg-white text-primary hover:bg-white/90 border-white shadow-xl'
						>
							Start Your Journey
						</Button>
						<Button
							variant='outline'
							size='xl'
							className='bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary'
						>
							Contact Us
						</Button>
					</div>

					<div className='grid sm:grid-cols-3 gap-8 pt-12'>
						<div className='text-white'>
							<div className='text-4xl font-bold mb-2'>100%</div>
							<div className='text-white/80'>
								Natural Ingredients
							</div>
						</div>
						<div className='text-white'>
							<div className='text-4xl font-bold mb-2'>Zero</div>
							<div className='text-white/80'>Plastic Waste</div>
						</div>
						<div className='text-white'>
							<div className='text-4xl font-bold mb-2'>∞</div>
							<div className='text-white/80'>Positive Impact</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
