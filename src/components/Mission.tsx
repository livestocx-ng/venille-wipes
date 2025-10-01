import {Button} from '@/components/ui/button';
import womanImage from '@/assets/woman-using-wipe.jpeg';
import {Globe, Users, Sparkles} from 'lucide-react';

const Mission = () => {
	return (
		<section
			id='mission'
			className='py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 scroll-mt-24'
		>
			<div className='container mx-auto'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Image */}
					<div className='relative animate-fade-in'>
						<div className='relative rounded-3xl overflow-hidden shadow-2xl'>
							<img
								src={womanImage}
								alt='Woman using Venille makeup wipe'
								className='w-full h-auto'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent'></div>
						</div>
						{/* Floating stats */}
						<div className='absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl'>
							<div className='text-4xl font-bold text-primary mb-1'>
								6 months
							</div>
							<div className='text-sm text-muted-foreground'>
								vs 100 years
							</div>
						</div>
					</div>

					{/* Content */}
					<div className='space-y-6 animate-slide-in-right'>
						<div className='inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full'>
							<Globe className='w-4 h-4 text-secondary' />
							<span className='text-sm font-medium text-secondary'>
								Our Mission
							</span>
						</div>

						<h2 className='text-4xl md:text-5xl font-bold leading-tight'>
							Beauty That Creates a{' '}
							<span className='text-gradient-eco'>
								Better World
							</span>
						</h2>

						<p className='text-lg text-muted-foreground leading-relaxed'>
							At Venille, we believe that beauty shouldn't come at
							the cost of our planet. We're on a mission to
							revolutionize the beauty industry by creating
							products that are as kind to your skin as they are
							to the environment.
						</p>

						<p className='text-lg text-muted-foreground leading-relaxed'>
							Our makeup wipes are crafted from sustainable banana
							fibre and organic cotton, setting a new standard for
							eco-conscious beauty. We're committed to empowering
							women to make choices that support both their
							personal wellness and global sustainability.
						</p>

						<div className='grid sm:grid-cols-2 gap-4 pt-4'>
							<div className='flex items-start gap-3'>
								<div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
									<Sparkles className='w-5 h-5 text-primary' />
								</div>
								<div>
									<h4 className='font-semibold mb-1'>
										Sustainable Materials
									</h4>
									<p className='text-sm text-muted-foreground'>
										100% biodegradable banana fibre &
										organic cotton
									</p>
								</div>
							</div>

							<div className='flex items-start gap-3'>
								<div className='w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0'>
									<Users className='w-5 h-5 text-secondary' />
								</div>
								<div>
									<h4 className='font-semibold mb-1'>
										Women Empowerment
									</h4>
									<p className='text-sm text-muted-foreground'>
										Supporting women and eco-conscious
										communities
									</p>
								</div>
							</div>
						</div>

						<Button variant='secondary' size='lg' className='mt-4'>
							Read Our Story
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;
