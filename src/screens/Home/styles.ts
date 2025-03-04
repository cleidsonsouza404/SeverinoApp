import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        padding: 30,
        backgroundColor: '#F5F5F5',
    },
    content: {
      paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
    },
    subtitle: {
        color: theme.colors.highlight,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
        fontFamily: theme.fonts.text500,
        lineHeight: 26
    }
})