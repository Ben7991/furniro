import Link from 'next/link';

import { Col, Container, Row } from '@/components/atoms/grid/Grid';
import { Headline } from '@/components/atoms/headline/Headline';
import { CategoryItemProps, SetupImageProps } from './page.types';
import Image from 'next/image';
import { Button } from '@/components/atoms/button/Button';

export function Hero(): React.JSX.Element {
  return (
    <article className="hero py-10 md:py-20 xl:py-32">
      <Container>
        <Row className="justify-end">
          <Col className="basis-full md:basis-2/3 lg:basis-1/2">
            <div className="bg-[var(--cream-300)] p-4 xl:px-10 xl:py-8">
              <span className="text-black">New Arrivals</span>
              <h1 className="mt-1 text-[var(--cream-700)] text-5xl font-bold leading-14">
                Discover Our <br />
                New Collection
              </h1>
              <p className="mb-6 lg:mb-8 mt-3 text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt natus quas quasi rem, facere voluptate quidem corrupti
                neque nisi quisquam!
              </p>
              <Link
                href="/shop"
                className="inline-block py-3 px-6 bg-[var(--cream-700)] text-white"
              >
                Buy Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export function Categories(): React.JSX.Element {
  return (
    <article className="py-10">
      <Container>
        <div className="text-center mb-10">
          <Headline tag="h1">Browse The Range</Headline>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Row className="flex-col md:flex-row gap-10">
          <Col className="basis-full md:basis-1/3">
            <CategoryItem
              headline="Bedroom"
              imagePath="/furniro-category-1.jpg"
            />
          </Col>
          <Col className="basis-full md:basis-1/3">
            <CategoryItem
              headline="Living"
              imagePath="/furniro-category-2.jpg"
            />
          </Col>
          <Col className="basis-full md:basis-1/3">
            <CategoryItem
              headline="Dining"
              imagePath="/furniro-category-3.jpg"
            />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

function CategoryItem({
  imagePath,
  headline,
}: CategoryItemProps): React.JSX.Element {
  return (
    <div className="text-center">
      <div className="w-full h-[440px] md:h-[270px] lg:h-[400px] xl:h-[440px] 2xl:h-[450px] overflow-hidden rounded-lg">
        <Image
          alt={`${headline} image`}
          src={imagePath}
          width={350}
          height={440}
          className="w-full overflow-hidden"
        />
      </div>
      <Headline tag="h3" className="mt-2 md:mt-5 font-medium">
        {headline}
      </Headline>
    </div>
  );
}

export function Products(): React.JSX.Element {
  return (
    <article className="py-10">
      <Container>
        <div className="text-center mb-10">
          <Headline tag="h1">Our Products</Headline>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mb-10"></div>
        <div className="text-center">
          <Button el="button" variant="outline">
            Show More
          </Button>
          <Button el="button" variant="primary">
            Show More
          </Button>
        </div>
      </Container>
    </article>
  );
}

export function ShareSetup(): React.JSX.Element {
  return (
    <article className="py-10 border-b border-b-gray-300">
      <Container className="text-center">
        <strong>Share your setup with</strong>
        <Headline tag="h1">#FurniroFurniture</Headline>
      </Container>
      <div className="relative md:h-[700px] 2xl:h-[700px] overflow-hidden px-5 py-10 md:p-0 space-y-5">
        <SetupImage
          altText="Dinning table"
          imagePath="/furniro-setup-1.jpg"
          className="md:hidden 2xl:block 2xl:left-1/2 2xl:top-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2 md:w-[350px] md:h-[400px]"
        />
        <SetupImage
          altText=""
          imagePath="/furniro-setup-2.jpg"
          className="md:-left-14 lg:left-10 xl:left-32 lg:top-[20px] md:w-[500px] md:h-[350px]"
        />
        <SetupImage
          altText=""
          imagePath="/furniro-setup-3.jpg"
          className="md:hidden lg:block lg:left-20 xl:left-64 md:bottom-[85px] md:w-[370px] md:h-[220px]"
        />
        <SetupImage
          altText=""
          imagePath="/furniro-setup-4.jpg"
          className="md:-right-20 lg:right-36 xl:right-64 lg:top-[20px] md:w-[370px] md:h-[450px]"
        />
        <SetupImage
          altText=""
          imagePath="/furniro-setup-5.jpg"
          className="md:right-32 md:bottom-[10px] md:w-[500px] md:h-[280px]"
        />
      </div>
    </article>
  );
}

function SetupImage({
  altText,
  imagePath,
  className,
}: SetupImageProps): React.JSX.Element {
  return (
    <div className={`md:absolute overflow-hidden ${className}`}>
      <Image
        alt={altText}
        src={imagePath}
        width={500}
        height={300}
        className="w-full rounded-lg"
      />
    </div>
  );
}
