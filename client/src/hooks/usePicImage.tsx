import { useCallback, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
export interface imagePickerProps {
  endpoint: string
}
function UsePicImage ({ endpoint }: imagePickerProps) {
  const [error, setError] = useState<boolean>(false)
  const [errorText, setErrorText] = useState('')
  const [link, setLink] = useState<null | string>(null)
  const handleImageSelect = useCallback(async () => {
    try {
      const file = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      const { assets } = file;
      if (file.canceled) {
        return;
      }
      if (!assets) {
        return;
      }
      const asset = assets[0];
      const fileName = asset.uri.replace(/^.*[\\\/]/, '');
      const ext = asset.uri.substring(asset.uri.lastIndexOf('.') + 1);
      const formData: FormData = new FormData();
      formData.append('file', {
        uri: asset.uri,
        name: fileName,
        type: asset.type ? `image/${ext}` : `video/${ext}`,
      } as unknown as Blob);

      const userAvatar = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
        },
        body: formData,
      });
      const result = await userAvatar.json();
      setLink(result.link);
    } catch (err) {
      setError(true)
      setErrorText(String(err));
    }
  }, []);

  const updateError = (error: boolean, errorText: string) => {
    setError(error)
    setErrorText(errorText)
  }

  return {
    handleImageSelect,
    updateError,
    link,
    error,
    errorText
  }
}

export default UsePicImage
