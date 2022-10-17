import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        grid-template-columns: 1fr;
    };

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        gap: 16px;
    };
`;

export const Photo = styled.img`
    width: 250px;
    height: auto;
    object-fit: contain;
    border-radius: 20px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 128px;
    };
`;

export const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        gap: 16px;
    };
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.textPrimary};

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 22px;
    };
`;

export const LeadParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.textSecondary};

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 17px;
    };
`;