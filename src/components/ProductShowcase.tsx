import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import productImage from '@/assets/venille-wipes-product.png';
import {Check} from 'lucide-react';

const features = [
	'Aloe Vera & Chamomile infused',
	'Shea Butter for deep moisture',
	'Free from harmful chemicals',
	'Dermatologically tested',
	'Perfect for all skin types',
	'Compostable packaging',
];

const ProductShowcase = () => {
	return (
		<section id='products' className='py-20 px-4 bg-card scroll-mt-24'>
			<div className='container mx-auto'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>
						Meet Your New{' '}
						<span className='text-gradient-eco'>
							Beauty Essential
						</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Premium quality wipes that care for your skin while
						protecting the planet
					</p>
				</div>

				<div className='max-w-5xl mx-auto'>
					<Card className='overflow-hidden border-2 shadow-xl'>
						<CardContent className='p-0'>
							<div className='grid lg:grid-cols-2'>
								{/* Product Image */}
								<div className='bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center justify-center'>
									<img
										src={productImage}
										alt='Venille Makeup Wipes'
										className='w-full max-w-md hover-lift'
									/>
								</div>

								{/* Product Details */}
								<div className='p-8 lg:p-12 space-y-6 flex flex-col justify-center'>
									<div>
										<h3 className='text-3xl font-bold mb-2'>
											Venille Makeup Wipes
										</h3>
										<p className='text-muted-foreground'>
											Aloe Moisture Formula
										</p>
									</div>

									<div className='space-y-3'>
										{features.map((feature, index) => (
											<div
												key={index}
												className='flex items-center gap-3'
											>
												<div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
													<Check className='w-4 h-4 text-primary' />
												</div>
												<span className='text-foreground'>
													{feature}
												</span>
											</div>
										))}
									</div>

									<div className='pt-4'>
										<div className='text-3xl font-bold text-primary mb-4'>
											30% More Affordable
										</div>
										<Button
											variant='hero'
											size='lg'
											className='w-full sm:w-auto'
										>
											Shop Now
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;
