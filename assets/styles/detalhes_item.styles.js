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
  image: {
    width: '100%',
    height: 250,
    borderRadius: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.25)',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F5F3FF',
    marginBottom: 6,
  },
  metaText: {
    fontSize: 13,
    color: '#A78BFA',
    marginBottom: 4,
    fontWeight: '700',
  },
  autorText: {
    fontSize: 13,
    color: '#DDD6FE',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#F5F3FF',
    marginTop: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#E9D5FF',
    lineHeight: 22,
  },
  listItem: {
    fontSize: 14,
    color: '#E9D5FF',
    marginBottom: 6,
  },
  favButton: {
    backgroundColor: '#6D28D9',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#6D28D9',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  favButtonActive: {
    backgroundColor: '#8B5CF6',
  },
  favButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.7,
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
});
