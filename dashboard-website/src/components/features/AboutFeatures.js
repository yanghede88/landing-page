import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import JesseProfile from "images/jesse.jpg";
const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  // `background-image: url("${props.imageSrc}");`,
  // tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
  // // Add custom CSS for image size
  // tw`w-32 h-32 md:w-64 md:h-64`, // Adjust the dimensions as needed
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-64 md:h-64 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:"https://github.com/PatrickTangwen/med-dash-login/blob/main/src/images/login.jpg?raw=true",
      title: "Introduction",
      description:
        "As health sensor technology becomes more advanced and common amongst the general population, we as data scientists are provided with a whole plethora of health related data that can provide meaningful insights to a person’s health status. Our project aims to combine all the different forms of sensor data into a consolidated dashboard that will provide the user with a snapshot of their current health status."
    },

    {
      imageSrc:"https://private-user-images.githubusercontent.com/102549602/309459844-c3213357-626d-487b-aa6e-ace46fde00e4.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzNjczNjgsIm5iZiI6MTcwOTM2NzA2OCwicGF0aCI6Ii8xMDI1NDk2MDIvMzA5NDU5ODQ0LWMzMjEzMzU3LTYyNmQtNDg3Yi1hYTZlLWFjZTQ2ZmRlMDBlNC5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMlQwODExMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMzkyODkwZmEwYzgxMDYxYjU4MDRkY2MxMDdjZDQ0YzliNDdiOGU2ZWE5MTZlNjdjZjA4ODE5MTJjYjQ0OTNjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.cS7ifBGGX7aKsgBPFzzEZqCmWkuxvqJ7qEIICIfqY2U",
      title: "Background",
      description:
        "Major insufficiencies in healthcare systems today leave patients and clinicians alike wanting for a more effective way of receiving and giving care. Several major deficiencies are 1) the lack of an integrated Electronic Health Record (EHR), lifelog, and personal omics data, and 2) the lack of standardization across healthcare systems, data standards, and terminologies. This incompatibility creates inefficiencies in operating personalized medicine, leading to problems with interoperability and introducing ambiguity into the healthcare environment, especially amongst patients, their providers, and organizations. We talked to real patients who have struggled with these issues in their medical are history, and identified the core problems they were having with the way care was prescribed to them. Using this information, we proceeded to come up with a solution that could help boost the communication and understanding between patients and their healthcare providers.",
    },

    {
      imageSrc:
        "https://github.com/PatrickTangwen/med-dash-login/blob/main/src/images/diagram.jpg?raw=true",
      title: "Data Collection",
      description:
        "We were given data from volunteer patients that were eager to help with our project. The data comes from the Vital API and includes variables such as: heart rate, calories burned, number of steps, etc. This is unique from other dashboards as we are obtaining the data from the patients themselves that they provide from different sources",
    },
    {
      imageSrc:
        "https://private-user-images.githubusercontent.com/102549602/309460304-8cc1919d-e0bf-4bbf-bd89-2e30861de959.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzNjc5MTQsIm5iZiI6MTcwOTM2NzYxNCwicGF0aCI6Ii8xMDI1NDk2MDIvMzA5NDYwMzA0LThjYzE5MTlkLWUwYmYtNGJiZi1iZDg5LTJlMzA4NjFkZTk1OS5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMlQwODIwMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNDY2NmM0OTg4MTc1MDkyYTA1N2QyOTg0OTQ4NGI2MWU2ZjkyNzgyYjM0NzE3ODdlZjUxNDBjYzM3MDZmMmRmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.v5aED3_qTkmnlR_4HfNRHOs5sH4S_AzbPFt1XtGjPnI",
      title: "Methods",
      description:
        "For design, we used third party library called “AntDesign” as the primary tool to integrate visualizations onto our website while using Pandas,Numpy,MongoDB to create a data pipeline that is designed to pull, read, clean, standardize, and add features to the data given to our team from the Vital APIs. To host our work, we used React.js hosted on Github Pages to create a website that would allow the user to interact with the visualizations.",
    },
    {
      imageSrc:
        "https://private-user-images.githubusercontent.com/102549602/309460014-76c40c62-60cc-4493-9d8b-52d9ad4a3d31.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzNjc1OTEsIm5iZiI6MTcwOTM2NzI5MSwicGF0aCI6Ii8xMDI1NDk2MDIvMzA5NDYwMDE0LTc2YzQwYzYyLTYwY2MtNDQ5My05ZDhiLTUyZDlhZDRhM2QzMS5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMlQwODE0NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMzA4NGIyNjJhNGEzNjdlMjYxOTY1ODk4NTBiMTFkOTAwOTZmY2E1ODQzZTZhYjY1MDlhZDk5NjI2NGMzZWEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.LgI7TawD2LQA_OXcHbl6wG2nVvaMXEbJzucr4ov7Zso",
      title: "Next Step",
      description:
        "Incorporating more functionalities to the medical dashboard such as journal entry, predictive analytics and real-time health alerts. \n Getting more feedback from patients/users will help us determine what features are helpful.",
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          {/* <HeadingTitle>Popular Events</HeadingTitle> */}
          <HeadingDescription>
            The purpose and methodology behind our integrative medical dashboard
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
             
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
