import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0B0B14',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 18,
    paddingBottom: 90,
  },
  formTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#F5F3FF',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  fieldGroup: {
    marginBottom: 14,
  },
  input: {
    backgroundColor: 'rgba(22, 22, 38, 0.9)',
    borderColor: 'rgba(139, 92, 246, 0.5)',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: '#F5F3FF',
  },
  textArea: {
    height: 110,
  },
  submitButton: {
    backgroundColor: '#6D28D9',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 18,
    shadowColor: '#6D28D9',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#121222',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(139, 92, 246, 0.2)',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  navText: {
    fontSize: 12,
    color: '#C4B5FD',
    fontWeight: '600',
  },
  activeNavText: {
    color: '#8B5CF6',
    fontWeight: '800',
  },
});
