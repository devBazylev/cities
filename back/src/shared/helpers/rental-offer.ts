import { Author, Coordinates, FacilityType, RentalOffer, RentalOfferType, UserType } from '../types/index.js';

export function generateRentalOffer(rentalOfferData: string): RentalOffer {
  const [
    name,
    description,
    publishDate,
    city,
    imagePreview,
    photos,
    isPremium,
    isFavourite,
    rating,
    type,
    roomNumber,
    guestNumber,
    price,
    facilities,
    author,
    commentsCount,
    coordinates
  ] = rentalOfferData.replace('\n', '').split('\t');

  const getAuthor = (authorString: string): Author => {
    const [userName, email, avatar, password, userType] = authorString.split(';');
    return {
      name: userName,
      email,
      avatar,
      password,
      userType: UserType[userType as UserType],
    };
  };

  const getFacilities = (facilitiesString: string): FacilityType[] => facilitiesString
    .split(';')
    .map((facilityName) => {
      const facilityKey = Object.keys(FacilityType).find(
        (key) => FacilityType[key as keyof typeof FacilityType] === facilityName
      );
      return facilityKey ? FacilityType[facilityKey as keyof typeof FacilityType] : undefined;
    })
    .filter((facility): facility is FacilityType => facility !== undefined);

  const getCoordinates = (coordinatesString: string): Coordinates => {
    const [longitude, latitude] = coordinatesString.split(';');
    return {
      longitude: Number(longitude),
      latitude: Number(latitude)
    };
  };

  return {
    name,
    description,
    publishDate: new Date(publishDate),
    city,
    imagePreview,
    photos: photos.split(';').map((photo) => photo),
    isPremium: isPremium === 'true',
    isFavourite: isFavourite === 'true',
    rating: parseFloat(Number(rating).toFixed(1)),
    type: RentalOfferType[type as 'apartment' | 'house' | 'room' | 'hotel'],
    roomNumber: Number.parseInt(roomNumber, 10),
    guestNumber: Number.parseInt(guestNumber, 10),
    price: Number.parseInt(price, 10),
    facilities: getFacilities(facilities),
    author: getAuthor(author),
    commentsCount: Number.parseInt(commentsCount, 10),
    coordinates: getCoordinates(coordinates),
  };
}
