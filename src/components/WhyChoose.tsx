import {Card, CardContent} from '@/components/ui/card';
import {Leaf, Heart, DollarSign, Recycle} from 'lucide-react';

const benefits = [
	{
		icon: Leaf,
		title: 'Plastic-Free & Biodegradable',
		description:
			'Made from 100% banana fibre and organic cotton. Decomposes in just 6 months, not 100 years.',
	},
	{
		icon: Heart,
		title: 'Gentle on Your Skin',
		description:
			'Infused with aloe vera, chamomile, and shea butter. Free from parabens, alcohol, and SLS.',
	},
	{
		icon: DollarSign,
		title: 'Affordable Sustainability',
		description:
			'30% more affordable than other eco-friendly options without compromising on quality.',
	},
	{
		icon: Recycle,
		title: 'Environmentally Responsible',
		description:
			'Compostable and recyclable packaging. Join us in creating a circular economy.',
	},
];

const WhyChoose = () => {
	return (
		<section
			id='sustainability'
			className='py-20 px-4 bg-card scroll-mt-24'
		>
			<div className='container mx-auto'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>
						Why Choose{' '}
						<span className='text-gradient-eco'>Venille?</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Discover the difference that sustainable beauty makes
						for your skin and our planet
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className='hover-lift border-2 hover:border-primary/50 transition-all animate-scale-in'
							style={{animationDelay: `${index * 0.1}s`}}
						>
							<CardContent className='p-6 space-y-4'>
								<div className='w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center'>
									<benefit.icon className='w-7 h-7 text-primary' />
								</div>
								<h3 className='text-xl font-semibold'>
									{benefit.title}
								</h3>
								<p className='text-muted-foreground'>
									{benefit.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChoose;
