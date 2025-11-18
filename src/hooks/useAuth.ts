// src/hooks/useAuth.ts
import { useContext } from 'react';
// We will create the AuthContext in a later prompt.
// For now, we'll import a placeholder type.
import { AuthContextType } from '@/contexts/AuthContext';
import { AuthContext } from '@/contexts/AuthContext'; // Placeholder import

/**
 * Provides access to the authentication context.
 * Must be used within an AuthProvider.
 *
 * @returns {AuthContextType} The authentication context including user, login, and logout functions.
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
```*Note: This hook depends on `AuthContext`, which we'll create in Prompt 9. This file will work as-is once the context is created.*

---

#### 5. useFilters.ts (URL-based Filters)

Manages filter state and syncs it with the URL's query parameters.

```ts