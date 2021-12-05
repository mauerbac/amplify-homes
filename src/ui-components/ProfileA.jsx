/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ProfileA(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="center"
      gap="24px"
      width="320px"
      position="relative"
      direction="column"
      height="428px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        padding="0px 0px 0px 0px"
        borderRadius="160px"
        shrink="0"
        src={home?.image_url}
        width="167px"
        position="relative"
        height="164px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="center"
        shrink="0"
        gap="8px"
        width="248px"
        position="relative"
        direction="column"
        height="25px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="143px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          height="33px"
          children={home?.address}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="center"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Inter"
        width="193px"
        fontSize="16px"
        lineHeight="24px"
        position="relative"
        fontWeight="700"
        direction="column"
        height="37px"
        children={`${"Price: $"}${home?.price}${" /night"}`}
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Badge
        backgroundColor="rgba(214.00000244379044,245.00000059604645,219.0000021457672,1)"
        color="rgba(54.00000058114529,94.0000019967556,61.00000016391277,1)"
        shrink="0"
        textAlign="left"
        display="flex"
        letterSpacing="0.49px"
        justifyContent="flex-start"
        variation="success"
        fontFamily="Inter"
        size="default"
        width="246px"
        fontSize="16px"
        lineHeight="20px"
        fontWeight="700"
        height="36px"
        direction="column"
        children={`${"Discount - "}${home?.discount}${"% off"}`}
        {...getOverrideProps(overrides, "Flex.Badge[0]")}
      ></Badge>
    </Flex>
  );
}
