
import Hero from '@/components/Hero';
import BrandCarousel from '@/components/BrandCarousel';
import Testimonials from '@/components/Testimonials';
import ContentBlock from '@/components/ContentBlock';
import CardList from '@/components/CardList';

export const metadata = {
	title: 'Dentistry',
	description: 'Dental problems no more',
}
const heroData = {
	"success": "true",
	"data": [
		{
			"image": "AdobeStock_560444532.png",
			"title": "The future of<br />face-driven dentistry",
			"description": "A new standard for dental imaging solutions through state-of-the-art technology, brand leads the global market in digital dentistry.",
			"link": { url: '/', name: 'learn more' },
		},
	]
}
const newsData = {
	"success": "true",
	"data": {
		'title': 'Latest news and events',
		'viewall': {
			'text': 'See All News & Events',
			'link': '/'
		},
		'newsdata': [
			{
				"image": "newsimage.png",
				"title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi, lobortis eu eros at, egestas sollicitudin ipsum. Orci varius natoque penatibus et magnis dis parturient…",
				"tag": ['current', 'sports'],
				"category": ['news'],
				"published_date": 'Jan 1, 2023',
			},
			{
				"image": "newsimage.png",
				"title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi, lobortis eu eros at, egestas sollicitudin ipsum. Orci varius natoque penatibus et magnis dis parturient…",
				"tag": ['past', 'politics'],
				"category": ['news'],
				"published_date": 'Jan 1, 2023',
			},
			{
				"image": "newsimage.png",
				"title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi, lobortis eu eros at, egestas sollicitudin ipsum. Orci varius natoque penatibus et magnis dis parturient…",
				"tag": ['past'],
				"category": ['news'],
				"published_date": 'Jan 1, 2023',
			},
			{
				"image": "",
				"title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi, lobortis eu eros at, egestas sollicitudin ipsum. Orci varius natoque penatibus et magnis dis parturient…",
				"tag": ['society'],
				"category": ['news'],
				"published_date": 'Jan 1, 2023',
			}
		]
	}
};

const contentBlockData = {
	"success": "true",
	"data": [
		{
			"image": "digital-machine.png",
			"title": "Leading digital dentistry from diagnosis to treatment",
			"description": "Brand isan innovative dental solution company that improves oral health with our cutting-edge products and services. We push the boundaries of dental development and strive to improve the quality of life for everyone, and our commitment to research and development sets us apart from our competitors. ",
			"link": { url: '/', name: 'learn more' },
		},
	]
}
const brandsData = {
	"success": "true",
	"data": {
		"title": "",
		"brands": [
			{
				"image": 'brandface.png',
				"largeimage": 'brandimage.png',
				"text": "<p>It is one of the fastest and most user-friendly facial scanners on the market today, engineered specifically for the dental industry. Its virtual patient technology and modern design will provide your patients with a personalized and high-tech dental experience. </p>",
				"link": { url: '/', name: 'learn more' }
			},
			{
				"image": 'brandface.png',
				"largeimage": 'brandimage.png',
				"text": "<p>It is one of the fastest and most user-friendly facial scanners on the market today, engineered specifically for the dental industry. Its virtual patient technology and modern design will provide your patients with a personalized and high-tech dental experience. </p>",
				"link": { url: '/', name: 'learn more' }
			},
			{
				"image": 'brandface.png',
				"largeimage": 'brandimage.png',
				"text": "<p>It is one of the fastest and most user-friendly facial scanners on the market today, engineered specifically for the dental industry. Its virtual patient technology and modern design will provide your patients with a personalized and high-tech dental experience. </p>",
				"link": { url: '/', name: 'learn more' }
			},
			{
				"image": 'brandface.png',
				"largeimage": 'brandimage.png',
				"text": "<p>It is one of the fastest and most user-friendly facial scanners on the market today, engineered specifically for the dental industry. Its virtual patient technology and modern design will provide your patients with a personalized and high-tech dental experience. </p>",
				"link": { url: '/', name: 'learn more' }
			},
			{
				"image": 'brandface.png',
				"largeimage": 'brandimage.png',
				"text": "<p>It is one of the fastest and most user-friendly facial scanners on the market today, engineered specifically for the dental industry. Its virtual patient technology and modern design will provide your patients with a personalized and high-tech dental experience. </p>",
				"link": { url: '/', name: 'learn more' }
			},
		]
	}
}

const testimonialsData = {
	"success": "true",
	"data": {
		"title": "What dentists say?",
		"testimonials": [{
			"text": "<p>The <strong><u>BRANDSCAN Alpha</u></strong> has provided great images for the past six years. One shot cephalometric X-Brand images enable precise diagnosis while minimizing patient's movement and image distortion. 3D technology gives me more information to plan orthodontic treatment, and it is also a powerful tool in educating our patients.</p><p>The <strong><u>BRANDSCAN Alpha</u></strong>  has been one of the best investments since starting my practice in 2010.</p>",
			"textby": {
				"name": "Hyeyoung Choi",
				"study": "Master of Dental Orthodontic",
				"post": "Principal Doctor of Yonseiwoori Dental Clinic, Seoul, Korea"
			}
		},
		{
			"text": "<p>The <strong><u>BRANDSCAN Alpha</u></strong>  has provided great images for the past six years. One shot cephalometric X-Brand images enable precise diagnosis while minimizing patient's movement and image distortion. 3D technology gives me more information to plan orthodontic treatment, and it is also a powerful tool in educating our patients.</p><p>The <strong><u>BRANDSCAN Alpha</u></strong>  has been one of the best investments since starting my practice in 2010.</p>",
			"textby": {
				"name": "Hyeyoung Choi",
				"study": "Master of Dental Orthodontic",
				"post": "Principal Doctor of Yonseiwoori Dental Clinic, Seoul, Korea"
			}
		},
		{
			"text": "<p>The BRANDSCAN Alpha has provided great images for the past six years. One shot cephalometric X-Brand images enable precise diagnosis while minimizing patient’s movement and image distortion. 3D technology gives me more information to plan orthodontic treatment, and it is also a powerful tool in educating our patients.</p><p>The BRANDSCAN Alpha has been one of the best investments since starting my practice in 2010.</p>",
			"textby": {
				"name": "Hyeyoung Choi",
				"study": "Master of Dental Orthodontic",
				"post": "Principal Doctor of Yonseiwoori Dental Clinic, Seoul, Korea"
			}
		}]
	}
}


export default async function Home() {
	return (
		<>
			<main>
				<Hero data={heroData.data} />

				<BrandCarousel data={brandsData.data} />

				<Testimonials data={testimonialsData.data} />

				<ContentBlock data={contentBlockData.data} />

				<CardList data={newsData.data} count={3} />
			</main>
		</>
	)
}
