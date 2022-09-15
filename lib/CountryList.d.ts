import { FlatListProps } from 'react-native';
import { Country, CountryPickerStyles } from './types';
interface CountryListProps {
    data: Country[];
    customStyles?: CountryPickerStyles;
    filter?: string;
    filterFocus?: boolean;
    withFlag?: boolean;
    withEmoji?: boolean;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    flatListProps?: FlatListProps<Country>;
    onSelect(country: Country): void;
}
export declare const CountryList: {
    (props: CountryListProps): JSX.Element;
    defaultProps: {
        filterFocus: undefined;
    };
};
export {};
