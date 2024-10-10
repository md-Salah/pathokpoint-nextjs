"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Profile } from '@/components';
import { defaultSrc } from '@/constants';
import { useUser } from '@/hooks';
import { Author } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

const AuthorProfile = ({ author }: { author: Author }) => {
  const router = useRouter();
  const { user, token } = useUser();
  const [following, setFollowing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user) return;

    const checkFollowingStatus = async () => {
      try {
        const res = await axiosInstance.get(
          `/author/is-following/${author.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFollowing(res.data);
      } catch (error) {
        extractAxiosErr(error);
        console.log("Failed to check if following author");
      }
    };

    checkFollowingStatus();
  }, [user]);

  const handleFollow = async () => {
    if (!user) router.push("/auth/login");
    setLoading(true);
    try {
      await axiosInstance.post(`/author/follow/${author.id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFollowing(true);
    } catch (error) {
      console.log(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleUnfollow = async () => {
    if (!user) router.push("/auth/login");
    setLoading(true);
    try {
      await axiosInstance.post(`/author/unfollow/${author.id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFollowing(false);
    } catch (error) {
      console.log(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Profile
      name={author.name}
      description={author.description}
      dp={author.image?.src || defaultSrc.author}
      cover={author.banner?.src || defaultSrc.authorCover}
      following={following}
      handleFollow={handleFollow}
      handleUnfollow={handleUnfollow}
      loading={loading}
    />
  );
};

export default AuthorProfile;
