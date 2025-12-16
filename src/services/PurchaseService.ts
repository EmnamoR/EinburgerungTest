import Purchases, { PurchasesPackage } from 'react-native-purchases';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

class PurchaseService {
  static async initialize() {
    try {
      await Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
      if (Platform.OS === 'ios') {
        await Purchases.configure({ apiKey: 'appl_gLmIFLaxuxGXbYcchLHVBcCfZYt' });
      } 
    // else if (Platform.OS === 'android') {
    //     await Purchases.configure({ apiKey: 'goog_YOUR_REVENUECAT_ANDROID_API_KEY' });
    //   }
      
      console.log('RevenueCat initialized');
    } catch (error) {
      console.error('Error initializing RevenueCat:', error);
    }
  }

  static async getOfferings() {
    try {
      const offerings = await Purchases.getOfferings();
      return offerings.current?.availablePackages || [];
    } catch (error) {
      console.error('Error fetching offerings:', error);
      return [];
    }
  }


  static async purchasePremium(packageToPurchase: PurchasesPackage) {
    try {
      const { customerInfo } = await Purchases.purchasePackage(packageToPurchase);
      
      if (customerInfo.entitlements.active['Premium Access']) {
        await AsyncStorage.setItem('isPremium', 'true');
        return { success: true, customerInfo };
      } else {
        return { success: false, error: 'Purchase completed but premium not activated' };
      }
    } catch (error) {
      console.error('Purchase error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
  
  static async restorePurchases() {
    try {
      const customerInfo = await Purchases.restorePurchases();
      const isPremium = customerInfo.entitlements.active['Premium Access'] !== undefined;
      
      await AsyncStorage.setItem('isPremium', isPremium.toString());
      return { success: true, isPremium };
    } catch (error) {
      console.error('Restore error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

}

export default PurchaseService;