"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { getBlogs } from "@/redux/slices/storeFrontSlice";
import BlogCategories from "./BlogCategories";

const BlogsList = () => {
    const [filters, setFilters] = useState({ page: 1, perPage: 20 });
    const dispatch = useAppDispatch();
    const { blogs, error, loading } = useAppSelector(
        (state: any) => state.storeFront
    );
    const blogPosts = blogs?.data;
    const pagination = blogs?.pagination || null;
    useEffect(() => {
        dispatch(getBlogs(filters));
    }, [dispatch]);

    if (blogPosts?.length == 0) return <></>
    return (
        <>
            <div className="flex items-center justify-between mb-4 bg-[#393939] border-b border-gray-400">
                <h2 className="font-bold text-xl text-white p-3 flex-1">{"Our blog posts".toUpperCase()}</h2>
            
            </div>
            <main className="flex flex-col gap-30" role="blog">
                <div className="w-full max-w-[1170px] mx-auto px-6 xl:px-0">
                    <div className="py-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                            {/* Main Content – full width */}
                            <div className="lg:col-span-12">
                                <BlogCategories
                                    blogPosts={blogPosts}
                                    error={error}
                                    loading={loading}
                                    pagination={pagination}
                                    filters={filters}
                                    setFilters={setFilters}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>

    );
};

export default BlogsList;
