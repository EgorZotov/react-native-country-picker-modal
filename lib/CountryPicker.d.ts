import { ReactNode } from 'react';
import { ModalProps, FlatListProps, StyleProp, ViewStyle, ImageSourcePropType, ImageStyle } from 'react-native';
import { CountryPickerStyles, Country, CountryCode, Region, Subregion } from './types';
import { CountryFilter, CountryFilterProps } from './CountryFilter';
import { FlagButton } from './FlagButton';
interface CountryPickerProps {
    allowFontScaling?: boolean;
    countryCode?: CountryCode;
    customStyles?: CountryPickerStyles;
    region?: Region;
    subregion?: Subregion;
    countryCodes?: CountryCode[];
    excludeCountries?: CountryCode[];
    preferredCountries?: CountryCode[];
    modalProps?: ModalProps;
    filterProps?: CountryFilterProps;
    flatListProps?: FlatListProps<Country>;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withFlagButton?: boolean;
    withCloseButton?: boolean;
    withFilter?: boolean;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    withFlag?: boolean;
    withModal?: boolean;
    disableNativeModal?: boolean;
    visible?: boolean;
    placeholder?: string;
    containerButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImage?: ImageSourcePropType;
    closeButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImageStyle?: StyleProp<ImageStyle>;
    renderFlagButton?(props: FlagButton['props']): ReactNode;
    renderCountryFilter?(props: CountryFilter['props']): ReactNode;
    onSelect(country: Country): void;
    onOpen?(): void;
    onClose?(): void;
}
export declare const CountryPicker: {
    (props: CountryPickerProps): JSX.Element;
    defaultProps: {
        withModal: boolean;
        withAlphaFilter: boolean;
        withCallingCode: boolean;
        placeholder: string;
        allowFontScaling: boolean;
    };
};
export {};
