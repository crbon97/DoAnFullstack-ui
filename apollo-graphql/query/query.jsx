/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag';

export const GET_USER_POSTS = gql`
  query GetUserPosts($uid: ID!) {
    userPosts(id: $uid) {
      favourite_post{
      id
      title
      content
      slug
      price
      status
      isNegotiable
      propertyType
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        id
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        id
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        id
        url
      }
      createdAt
      updatedAt
    }
      listed_posts{
       id
      title
      content
      slug
      price
      status
      isNegotiable
      propertyType
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        id
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        id
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        id
        url
      }
      categories{
        id
        slug
        name
        image
        {
          id
          url
        }
      }
      createdAt
      updatedAt
    }
  }
  }
`;
export const GET_HEART = gql`
  query GetUserPosts($uid: ID!) {
    userPosts(id: $uid) {
      favourite_post{
      id
      title
      content
      slug
      price
      status
      isNegotiable
      propertyType
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        id
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        id
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        id
        url
      }
      createdAt
      updatedAt
      }
    }
  }
`;
export const GET_USER_INFO = gql`
query GetUserInfo($id: ID!){
  getUserInfo(id:$id){
    id
    first_name
    last_name
    date_of_birth
    gender
    gallery{
      url
      uid
      id
    }
    agent_location {
      lat
      lng
      formattedAddress
      zipcode
      city
      state_long
      state_short
      country_long
      country_short
    }
    favourite_post{
      id
      title
      content
      slug
      price
      status
      isNegotiable
      propertyType
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        id
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        id
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        id
        url
      }
      createdAt
      updatedAt
    }
      listed_posts{
       id
      title
      content
      slug
      price
      status
      isNegotiable
      propertyType
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        id
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        id
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        id
        url
      }
      createdAt
      updatedAt
    }
    social_profile{
      facebook
      linkedIn
      twitter
      instagram
    }
    cellNumber
    content
    profile_pic_main
    cover_pic_main
  }
}
`;
export const GET_ALL_HOTELS = gql`
    query GetAllHotels($type: String, $search: SearchInput, $amenities: AmenitiesSearchInput, $property: [String], $location: LocationInput){
    getAllHotels(type:$type, search: $search, amenities: $amenities, property: $property, location: $location){
      id
      title
      content
      slug
      price
      agentName
      agentEmail
      peopleLiked{
        id
      }
      status
      isNegotiable
      propertyType
      image{
       url
       thumb_url
      }
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        url
      }
      createdAt
      updatedAt
    }
  }
`;
export const GET_FILTERED_HOTELS = gql`
  query GetFilteredHotels($search: SearchInput, $amenities: AmenitiesSearchInput, $property: [String]){
      getFilteredHotels(search: $search, amenities: $amenities, property: $property){
         id
      title
      content
      slug
      price
      agentName
      agentEmail
      status
      isNegotiable
      propertyType
      image{
       url
       thumb_url
      }
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        url
      }
      createdAt
      updatedAt
      }
  }
`;
export const GET_HOTEL_INFO = gql`
  query GetHotelInfo($id: ID!){
    getHotelInfo(id: $id){
      id
      title
      content
      slug
      price
      agentName
      agentEmail
      status
      isNegotiable
      propertyType
      image{
       url
       thumb_url
      }
      condition
      rating
      ratingCount
      contactNumber
      termsAndCondition
      amenities{
        guestRoom
        bedRoom
        wifiAvailability
        parkingAvailability
        poolAvailability
        airCondition
        extraBedFacility
      }
      location{
        lat
        lng
        formattedAddress
        zipcode
        city
        state_long
        state_short
        country_long
        country_short
      }
      gallery{
        url
      }
      reviews{
        reviewID
        reviewTitle
        reviewText
        sortOfTrip
        reviewAuthorId{
          id
        }
        reviewAuthorFirstName
        reviewAuthorLastName
        reviewAuthorEmail
        reviewOverall
        reviewAuthorPic
        reviewedHotelId
        reviewTips
        reviewPics{
           url
        }
        reviewDate
        reviewOptional{
          option 
          optionField
        }
        reviewFields{
            rating 
            ratingFieldName
          }
      }
      peopleReviewed{
        id
      }
      peopleLiked{
        id
      }
      createdAt
      updatedAt
    }
  }
`;
export const GET_HOTEL_REVIEWS = gql`
  query GetHotelReviews($id: ID!){
    getHotelReviews(id:$id){
        reviewID
        reviewTitle
        reviewText
        sortOfTrip
        reviewAuthorId{
          id
        }
        reviewAuthorFirstName
        reviewAuthorLastName
        reviewAuthorEmail
        reviewOverall
        reviewAuthorPic
        reviewedHotelId
        reviewTips
        reviewPics{
           url
        }
        reviewDate
        reviewOptional{
          option 
          optionField
        }
        reviewFields{
            rating 
            ratingFieldName
          }
    }
  }
`;
export const GET_HOTEL_REVIEWS_LIKE_DISLIKE = gql`
      query GetReviewLikeDislike($id: ID!){
        getHotelInfo(id:$id){
        id
        reviews{
          peopleLiked {
            id
          }
          peopleDisliked {
            id
          }
        }
      }
    }
`;
export const GET_REVIEWS_LIKE_DISLIKE = gql`
    query GetReviewsLikeDislike($id: ID!){
      getReviewsLikeDislike(id:$id){
          reviewID
          peopleLiked {
          id
          }
          peopleDisliked {
          id
          }
      }
    }
`;
export const GET_USER_NOTIFICATION = gql`
 query GetUserNotifcation($id: ID!){
      getUserNotification(id:$id){
        reviewTitle
        reviewText
        reviewAuthorName
        reviewedHotelName
        peopleReviewedQuantity
        query
        reviewAuthorProfilePic
        read
      }
    }
`;
export const GET_USER_UNREAD_NOTIFICATION_NUMBER = gql`
query GetUserUnreadNotification($id: ID!){
  getUserUnreadNotification(id:$id){
    unreadNotification
  }
}
    `;
